require('dotenv').config();
import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript';
import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';
import type { ReactApolloVisitor } from '@graphql-codegen/typescript-react-apollo';

const typescriptPluginConfig: TypeScriptPluginConfig = {
  defaultScalarType: 'unknown',
  maybeValue: 'T | undefined',
  inputMaybeValue: 'T | null | undefined',
  inlineFragmentTypes: 'combine',
  scalars: {
    ID: 'string',
    Long: 'number',
    Float: 'number',
    Double: 'number',
    Date: 'string',
    JSON: 'object | object[]',
    JSONObject: 'object',
    DateTime: 'string',
    dateTypeConverter: 'string',
  },
};

const typescriptOperationsConfig: TypeScriptDocumentsPluginConfig = {};

const reactApolloPluginConfig: Partial<ReactApolloVisitor['config']> = {
  reactApolloVersion: 3,
};

const config: CodegenConfig = {
  overwrite: true,
  verbose: true,
  schema: [
    {
      ['https://itjoljzfpzfehyxrmxhb.supabase.co/graphql/v1']: {
        // @ts-ignore
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        },
      },
    },
  ],
  documents: ['./src/**/*.graphql'],
  generates: {
    'graphql/generated.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        ...typescriptPluginConfig,
        ...typescriptOperationsConfig,
        ...reactApolloPluginConfig,
      },
    },
    'graphql/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
