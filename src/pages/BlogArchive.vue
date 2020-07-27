<template>
  <div>
    <Layout>
      <div class="mx-auto bg-black min-h-screen">
        <h3
          class="text-4xl font-light italic mb-0 pb-0 mt-0 md:mt-4 text-center text-white pt-12"
        >
          Blog archive
        </h3>

        <div class="container flex flex-wrap mx-auto mt-4 archive">
          <div
            v-for="(edge, i) in $page.posts.edges"
            class="w-1/3 mb-4 card-column p-3"
            :key="edge.node.id"
          >
            <div class="card rounded-lg  border-gray-800 border-2">
              <img
                :src="edge.node.image"
                class="shadow-lg rounded-t-lg -mt-1 overflow-hidden border-t-2 border-gray-800"
              />
              <div class="p-6">
                <p class="text-2xl font-title mt-1">
                  {{ i + 1 }}. {{ edge.node.title }}
                </p>
                <p class="text-base mt-2 mb-4">{{ edge.node.excerpt }}...</p>
                <div class="flex justify-end">
                  <g-link
                    class="text-white no-underline bg-black px-4 py-2 hover:bg-white hover:text-black btn-default rounded-full"
                    :to="`${edge.node.path}`"
                  >
                    read more
                  </g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
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
export default {
  methods: {}
}
</script>

<style>
.archive .card-column:nth-child(3n + 1) .card {
  @apply bg-cyan-500;
}

.archive .card-column:nth-child(3n + 2) .card {
  @apply bg-magenta-400;
}

.archive .card-column:nth-child(3n + 3) .card {
  @apply bg-yellow-500;
}
</style>
