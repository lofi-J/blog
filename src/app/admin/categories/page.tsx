'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { GetAllCategoriesDocument, useDeleteCategoryMutation, useGetAllCategoriesQuery } from '@graphql/generated';

export default function CategoriesPage() {
  const { data } = useGetAllCategoriesQuery();
  const categories = data?.categoriesCollection?.edges;

  const [deleteCategoryMutation] = useDeleteCategoryMutation();

  const deleteCategory = async (id: number) => {
    await deleteCategoryMutation({
      variables: {
        id: id,
      },
      refetchQueries: [GetAllCategoriesDocument],
    });
  };

  return (
    <div className='flex flex-col gap-6 p-24'>
      <h1>Category 관리</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center'>Id</TableHead>
            <TableHead className='w-[200px] text-center'>Category</TableHead>
            <TableHead className='text-center'>
              <Button size={'sm'} variant={'ghost'} className='text-gray-200 text-sm w-[100px]'>
                생성
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories &&
            categories.map(({ node: category }) => (
              <TableRow key={category.id}>
                <TableCell className='font-medium text-center'>{category.id}</TableCell>
                <TableCell className='text-center'>{category.name}</TableCell>
                <TableCell className='text-center'>
                  <Button size={'sm'} onClick={() => deleteCategory(category.id)} className='cursor-pointer'>
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
