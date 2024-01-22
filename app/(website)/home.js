import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function Post({ posts }) {
  return (
    <>
      {posts && (
        <Container>
          
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-4 lg:gap-10">
         
          <div class="relative">
            <img class="rounded shadow-xl" src="img/roofing.png"></img>
            <a href="/roofing" className="absolute mx-auto bottom-2 bg-white right-2  w-fit
  text-white bg-gradient-to-r from-yellow-400 via-yellow-450 to-yellow-600 hover:bg-gradient-to-br   shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium text-[10px] px-1 rounded-lg text-sm px-1.5 py-0.4  text-center flex items-center">
  <span>Show more</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
        </a> </div>
          <div class="relative">
          <img class="rounded shadow-xl" src="img/extensions.png"></img>
          <a href="/extensions" className="absolute mx-auto bottom-2 bg-white right-2  w-fit
  text-white bg-gradient-to-r from-yellow-400 via-yellow-450 to-yellow-600 hover:bg-gradient-to-br   shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium text-[10px] px-1 rounded-lg text-sm px-1.5 py-0.4  text-center flex items-center">
  <span>Show more</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
        </a>
          </div>
          <div class="relative">
          <img class="rounded shadow-xl" src="img/tiling.png"></img>
          <a href="/tiling" className="absolute mx-auto bottom-2 bg-white right-2  w-fit
  text-white bg-gradient-to-r from-yellow-400 via-yellow-450 to-yellow-600 hover:bg-gradient-to-br   shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium text-[10px] px-1 rounded-lg text-sm px-1.5 py-0.4  text-center flex items-center">
  <span>Show more</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
        </a></div>
          <div class="relative">
          <img class="rounded shadow-xl" src="img/electrical-work.png"></img>
          <a href="/electrical-work" className="absolute mx-auto bottom-2 bg-white right-2  w-fit
  text-white bg-gradient-to-r from-yellow-400 via-yellow-450 to-yellow-600 hover:bg-gradient-to-br   shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium text-[10px] px-1 rounded-lg text-sm px-1.5 py-0.4  text-center flex items-center">
  <span>Show more</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
        </a> </div>
          
        
          
          

            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
            
          </div>
          
        </Container>
        
          
      )}
     
    </>
  );
}
