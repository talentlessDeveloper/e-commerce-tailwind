export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [

             {
                name: 'category',
                title: 'Category',
                type: 'string',
             },
                {
                    name: 'image',
                    title: 'Image',
                    type: 'array',
                    of:[{type: 'image'}],
                    options: {
                        hotspot: true,
                    }
                },
                {
                    name: 'relatedProducts',
                    title: 'Related Products',
                    type: 'array',
                    of:[{type: 'object'}],
                    options: {
                        hotspot: true,
                    }
                },
                {
                    name: 'name',
                    title: 'Name',
                    type: 'string'
                },
                {
                    name: 'slug',
                    title: 'Slug',
                    type: 'slug',
                    option: {
                        source: 'name',
                        maxLength: 96,
                    }
                },
                {
                    name: 'price',
                    title: 'Price',
                    type: 'number'
          
                },
                {
                    name: 'details',
                    title: 'Details',
                    type: 'string',
                }
          
            ],

}