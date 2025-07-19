
import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'app', 'blog');
const outputDir = path.join(process.cwd(), '_posts');


function extract(content, regex) {
  const match = content.match(regex);
  return match ? match[1].trim() : null;
}


if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
  console.log(`Created directory: ${outputDir}`);
}


const slugs = fs.readdirSync(blogDir).filter(file => 
  fs.statSync(path.join(blogDir, file)).isDirectory()
);

console.log(`Found ${slugs.length} posts to migrate...`);

slugs.forEach(slug => {
  try {
    const filePath = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(filePath)) {
        console.warn(`- Skipping ${slug}: page.tsx not found.`);
        return;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    
    const title = extract(fileContent, /<h1.*?>(.*?)<\/h1>/s);
    const excerpt = extract(fileContent, /<p className="mt-4.*?">(.*?)<\/p>/s);
    const date = extract(fileContent, /<time dateTime="(.*?)">/s);
    const firstTag = extract(fileContent, /<Link\s+href="\/tag\/(.*?)"/s);
    const firstImage = extract(fileContent, /const \w+ = '(.*?)';/s);

    
    let mainContent = extract(fileContent, /<div className="post-content.*?">(.*?)<\/div>/s);

    if (!mainContent) {
      console.error(`❌ Failed to extract main content for ${slug}.`);
      return;
    }
    
    
    
    mainContent = mainContent.replace(/<h3.*?>(.*?)<\/h3>/gs, '\n### $1\n');
    
    
    mainContent = mainContent.replace(
      /<CodeBlock language="(\w+)">\s*{\s*`(.*?)`\s*}\s*<\/CodeBlock>/gs,
      '\n```$1\n$2\n```\n'
    );
    
    
    mainContent = mainContent.replace(
      /<pre.*?><code.*?>\s*(.*?)\s*<\/code><\/pre>/gs,
      '\n```\n$1\n```\n'
    );
    
    
    mainContent = mainContent.replace(
        /<figure.*?><Image.*?alt="(.*?)".*?src={(\w+)}.*?\/><\/figure>/gs,
        (match, alt, srcVar) => {
            const imgSrcMatch = fileContent.match(new RegExp(`const ${srcVar} = '(.*?)';`));
            const imgSrc = imgSrcMatch ? imgSrcMatch[1] : 'image-path-not-found';
            return `\n![${alt}](${imgSrc})\n`;
        }
    );

    
    mainContent = mainContent.replace(/<[^>]+>/g, '');
    
    
    mainContent = mainContent
      .replace(/&/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '>')
      .replace(/"/g, '"')
      .replace(/'/g, "'")
      .replace(/{\/\*.*?\*\/}/g, '') 
      .replace(/^\s*[\r\n]/gm, '\n'); 


    
    const frontmatter = `---
title: "${title || 'Untitled'}"
date: "${date || new Date().toISOString().split('T')[0]}"
excerpt: "${excerpt || ''}"
imageUrl: "${firstImage || ''}"
tags: ["${firstTag || 'blog'}"]
---
`;

    const finalContent = frontmatter + '\n' + mainContent.trim();
    
    
    fs.writeFileSync(path.join(outputDir, `${slug}.md`), finalContent);
    console.log(`✅ Successfully migrated: ${slug}.md`);

  } catch (error) {
    console.error(`❌ Error migrating ${slug}:`, error);
  }
});

console.log("\nMigration complete. Please review the files in the _posts directory.");