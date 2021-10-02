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