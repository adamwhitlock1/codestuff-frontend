<template>
  <div>
    <Layout>
      <h2>Blog archive</h2>
      <div v-for="edge in $page.posts.edges" :key="edge.node.id">
        <h2>{{ edge.node.title }}</h2>
      </div>
    </Layout>
  </div>
</template>

<page-query>
query {
  posts: allPost(perPage:25) {
    pageInfo {
      perPage
      currentPage
      totalPages
      totalItems
      isFirst
      isLast
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        id
        path
        excerpt
        date
        image
        slug
        timeToRead
        title
      }
    }
  }
}
</page-query>

<script>
export default {}
</script>

<style></style>
