import type { LoaderArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url)
  const errorParam = url.searchParams.get("error")
  const successParam = url.searchParams.get("success")

  const data = {
    error: errorParam,
    success: successParam,
  }

  return json(data);
};

export default function Index() {
  const {error, success} = useLoaderData();

  return (
  <div>
    <h1>Short a URL</h1>

    <form method="post" action="/url">
      <input type="text" name="original" id="original" placeholder="Put ur URL to short"/>
      <label >
        {
          error === 'missing' && (
            <p>Complete all inputs</p>
          )
        }
        {
          error === 'unavailable' && (
            <p>The URl name has exist</p>
          )
        }
      </label>
      <input type="text" name="short" id="short" placeholder="short version of ur URL"/>
      <button type="submit">SHORT</button>
    </form>
    {
      success && (
        <p>Short URL created: <a href={`/${success}`}>{success}</a></p>
      )
    }
  </div>
  );
}
