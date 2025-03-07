import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import axios from "axios";
import { ScrollToTop } from "../components/molecules";

const PostDetails = ({ match }) => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`YOUR_API_ENDPOINT/${match.params.id}`);
                setPost(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPost();
    }, [match.params.id]);

    if (loading) {
        return <div>Loading post...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container py-8">
            <ScrollToTop />
            <Typography variant="h3" gutterBottom>
                {post.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Posted: {new Date(post.date).toLocaleDateString()}
            </Typography>
            <Box sx={{ mt: 4 }}>
                <Typography variant="body1" gutterBottom>
                    {post.content}
                </Typography>
            </Box>
        </div>
    );
};

export default PostDetails;
