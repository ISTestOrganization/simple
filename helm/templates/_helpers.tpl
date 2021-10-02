{{/* Generate basic labels */}}
{{- define "helm.labels" }}
generator: helm
date: {{ now | htmlDate }}
chart: {{ .Chart.Name }}
version: {{ .Chart.Version }}
app: simple
{{- end }}