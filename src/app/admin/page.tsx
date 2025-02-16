'use client';

import { useGetPostsQuery } from '@graphql/generated';

export default function AdminPage() {
  const { data } = useGetPostsQuery();

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
