import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";

const PostsPage = () => {
    return ( <div className="p-4">
        <BackButton link='/' text='Go Back'/>
        <PostsTable />
        <PostPagination />
    </div> );
}
 
export default PostsPage;