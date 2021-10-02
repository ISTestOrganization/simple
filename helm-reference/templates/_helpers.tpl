{{/* Generate basic labels */}}
{{- define "simple-chart.labels" }}
  labels:
    generator: helm
    date: {{ now | htmlDate }}
    chart: {{ .Chart.Name }}
    version: {{ .Chart.Version }}
    app: simple
{{- end }}