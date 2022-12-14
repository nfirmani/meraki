import * as React from 'react';
import { injectable, postConstruct } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';



import axios from "axios";
import {
    useQuery,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";


const queryClient = new QueryClient();

type Post = {
  id: number;
  title: string;
  body: string;
};

function usePosts() {
    return useQuery(
      "posts",
      async (): Promise<Array<Post>> => {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        return data;
      }
    );
  }


  function Posts({
    setPostId,
  }: {
    setPostId: React.Dispatch<React.SetStateAction<number>>;
  }) {
    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();
  
    return (
      <div>
        <h1>Posts</h1>
        <div>
          {status === "loading" ? (
            "Loading..."
          ) : error instanceof Error ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <div>
                {data?.map((post) => (
                  <p key={post.id}>
                    <a
                      onClick={() => setPostId(post.id)}
                      href="#"
                      style={
                        // We can access the query data here to show bold links for
                        // ones that are cached
                        queryClient.getQueryData(["post", post.id])
                          ? {
                              fontWeight: "bold",
                              color: "green",
                            }
                          : {}
                      }
                    >
                      {post.title}
                    </a>
                  </p>
                ))}
              </div>
              <div>{isFetching ? "Background Updating..." : " "}</div>
            </>
          )}
        </div>
      </div>
    );
  }


  const getPostById = async (id: number): Promise<Post> => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  };
  
  function usePost(postId: number) {
    return useQuery(["post", postId], () => getPostById(postId), {
      enabled: !!postId,
    });
  }
  
  function Post({
    postId,
    setPostId,
  }: {
    postId: number;
    setPostId: React.Dispatch<React.SetStateAction<number>>;
  }) {
    const { status, data, error, isFetching } = usePost(postId);
  
    return (
      <div>
        <div>
          <a onClick={() => setPostId(-1)} href="#">
            Back
          </a>
        </div>
        {!postId || status === "loading" ? (
          "Loading..."
        ) : error instanceof Error ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <h1>{data?.title}</h1>
            <div>
              <p>{data?.body}</p>
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    );
  }


  function Inizio() {
    const [postId, setPostId] = React.useState(-1);

    return ( 
        <QueryClientProvider client={queryClient}>
        <p>
          As you visit the posts below, you will notice them in a loading state
          the first time you load them. However, after you return to this list and
          click on any posts you have already visited again, you will see them
          load instantly and background refresh right before your eyes!{" "}
          <strong>
            (You may need to throttle your network speed to simulate longer
            loading sequences)
          </strong>
        </p>
        {postId > -1 ? (
          <Post postId={2} setPostId={setPostId} />
        ) : (
          <Posts setPostId={setPostId} />
        )}
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    )
}


@injectable()
export class QueryWidget extends ReactWidget {
    static readonly ID = 'query:widget';
    static readonly LABEL = 'Vista query';

    protected text: string;
    

    @postConstruct()
    protected async init(): Promise<void> {
        //  initialization 
        this.id = QueryWidget.ID;
        this.title.label = QueryWidget.LABEL;
        this.title.caption = QueryWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();    //  Update the view 
    }

    setText(text: string) {
        this.text = text;
    }

    
    //  According to the parameters received 
    protected render(): React.ReactNode {

        return ( 
            <Inizio></Inizio> 
        )

    



    }
}