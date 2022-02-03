import { Post } from '../../../types';
import StoryList from '../StoryList/StoryList';

export const Stories = ({posts}: {posts: [Post]}) => {
    return (
        <StoryList posts={posts} />
    )
}

export default Stories