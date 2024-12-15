import { Table,TableHead,TableHeader,TableRow ,TableBody,TableCell,TableCaption} from "@/components/ui/table";
import Link from "next/link";
import posts from "@/data/posts"
import {Post} from '@/types/posts'

interface PostTableProps {
    limit?:number;
    title?:string;
}

const PostsTable = ({limit,title}:PostTableProps) => {
    return ( <div className="p-3 mt-10">
        <h3 className="text-2xl mb-4 font-semibold">
            {title ? title : 'Posts'}
        </h3>
        <Table>
            <TableCaption>A list of recent posts</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Author</TableHead>
                    <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                    <TableHead>View</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {posts.map((post)=> (
                    <TableRow key={post.id} >
                        <TableCell>{post.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                        <TableCell className="hidden md:table-cell right">{post.date}</TableCell>
                        <TableCell>
                            <Link href={`/posts/edit/${post.id}`}></Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div> );
}
 
export default PostsTable;