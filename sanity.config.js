// Single workspace configuration

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './wicked-prints-cms/schemas/index'


export default defineConfig({
    basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATABASE,
  plugins: [deskTool()],
  schema: {
	  types: schemaTypes,
  },
})