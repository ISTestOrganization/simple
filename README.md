# simple

## build docker image
`docker build --tag simple .`

## run docker image
`docker run --publish 3000:3000 simple`

## push docker image
* your docker should be able to reach the repo you are trying to push to
* your tag should follow a certain format for docker to figure out which repo to use
* eg. europe-west3-docker.pkg.dev/simple-326714/docker/simple

`docker push {tag_name}`

## configure kubectl for a certain cluster
`gcloud container clusters get-credentials {cluster_name}`

## run helm locally and print output
helm install --debug --dry-run name-of-chart ./location/

## configure helm for a certain registry
* you should have setup gcloud with credentials that can access the registry

`gcloud auth print-access-token | helm registry login -u oauth2accesstoken --password-stdin https://us-central1-docker.pkg.dev`

## create helm chart
`helm chart save {chart_dir} {tag}`

* where tag is `{region}-docker.pkg.dev/{gcp_project_id}/{path_in_registry}:{version}`

## push helm chart
`helm chart push {tag}`

## deploy helm chart
```helm upgrade \
    obits-facebook helm/obits-facebook \
    --values helm/obits-facebook/values-${{ github.event.inputs.env }}.yaml \
    --install \
    --reset-values \
    --wait
```