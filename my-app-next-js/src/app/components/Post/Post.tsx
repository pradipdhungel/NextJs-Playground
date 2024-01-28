'use client'
import React, {useState, useEffect} from 'react';
import {inspect} from "util";
import styles  from '../../page.module.css';


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            {isLoading && <p>Loading posts...</p>}
            {error && <p>Error: {error}</p>}
            {posts.length > 0 && (
                <ul>
                    {posts.map((post) => (
                        <div className={styles.card}>
                            <li key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </li>
                        </div>

                    ))}
                </ul>
            )}
        </div>
    );
};

export default Posts;
