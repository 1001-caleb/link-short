export default function Index() {
  return (
  <div>
    <h1>Short a URL</h1>

    <form method="post" action="/url">
      <input type="text" name="original" id="original" placeholder="Put ur URL to short"/>
      <input type="text" name="short" id="short" placeholder="short version of ur URL"/>
      <button type="submit">SHORT</button>
    </form>
  </div>
  );
}
