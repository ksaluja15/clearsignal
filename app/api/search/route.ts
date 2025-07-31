import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { query } = await request.json();

        if (!query || typeof query !== 'string') {
            return NextResponse.json(
                { error: 'Query is required and must be a string' },
                { status: 400 }
            );
        }

        const perplexityApiKey = process.env.PERPLEXITY_API_KEY;
        
        if (!perplexityApiKey) {
            return NextResponse.json(
                { error: 'Perplexity API key not configured' },
                { status: 500 }
            );
        }

        const response = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${perplexityApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'sonar-pro',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful assistant that provides accurate and informative responses. Please provide comprehensive answers with relevant details.'
                    },
                    {
                        role: 'user',
                        content: query
                    }
                ],
                max_tokens: 1000,
                temperature: 0.2,
                top_p: 0.9,
                return_citations: true,
                return_images: false,
                return_related_questions: false,
                search_recency_filter: "month",
                top_k: 0,
                stream: false,
                presence_penalty: 0,
                frequency_penalty: 1
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Perplexity API error:', response.status, errorData);
            return NextResponse.json(
                { error: `Perplexity API error: ${response.status} ${response.statusText}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            return NextResponse.json(
                { error: 'Invalid response from Perplexity API' },
                { status: 500 }
            );
        }

        const aiResponse = data.choices[0].message.content;

        return NextResponse.json({
            response: aiResponse,
            citations: data.citations || [],
        });

    } catch (error) {
        console.error('Search API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
