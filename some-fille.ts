const options: any[] = {
    name: 'dockerSidecarImage',
    description:
      'Change this value to override the default Renovate Docker sidecar image.',
    type: 'string',
    default: 'ghcr.io/containerbase/sidecar:8.0.1',
    globalOnly: true,
}
