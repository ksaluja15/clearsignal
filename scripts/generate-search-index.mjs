
//js bec me lazy, one time run script so wouldnt need to optimize :)
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


function getPosts() {
  const postsDirectory = path.join(process.cwd(), '_posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    
    const slug = fileName.replace(/\.md$/, '');

    
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      excerpt: matterResult.data.excerpt,
      
      content: matterResult.content.replace(/\n/g, ' ').replace(/#+\s/g, ''),
    };
  });

  return allPostsData;
}


try {
  const posts = getPosts();
  const searchIndex = JSON.stringify(posts, null, 2);
  
  
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }

  fs.writeFileSync('public/search-index.json', searchIndex);
  console.log('✅ Search index generated successfully at public/search-index.json');

} catch (error) {
  console.error('❌ Error generating search index:', error);
}