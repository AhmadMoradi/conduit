function fetchAllTags(){
  return useFetcher<{tags: string[]}>('/tags');
}

export default {
  fetchAllTags,
}