export default {
  title: 'Place',
  name: 'place',
  type: 'document',
  fields: [
    {
      title: 'Name of Place',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    {
      name: 'location',
      type: 'geopoint',
      options: {
        leaflet: {
          defaultLocation: {
            lat: 59.924095,
            lng: 10.758458,
          },
        },
      },
    },
  ],
}
