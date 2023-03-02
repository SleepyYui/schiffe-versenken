<script>
    /** @type {import('./$types').PageData} */  export let data;
</script>
<h1>Done!</h1>
<button onclick="window.location.href='/'">Go back</button>
<p>Post data:</p>
{JSON.stringify(data.post)}