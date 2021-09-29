# simple

## build docker image
`docker build --tag simple .`

## run docker image
`docker run --publish 3000:3000 simple`

## configure kubectl for a certain cluster
`gcloud container clusters get-credentials {cluster_name}`

## run helm locally and print output
helm install --debug --dry-run name-of-chart ./location/