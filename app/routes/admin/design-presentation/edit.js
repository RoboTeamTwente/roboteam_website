import EditRoute from 'roboteam-website/routes/base/edit';

export default EditRoute.extend({
  modelName: "designitem",
  modelRouteParam: "designitem_id",
  useVideo: false,
});