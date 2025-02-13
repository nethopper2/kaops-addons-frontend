---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# Addon-specific settings
title: 'Karpenter'
navbar: false
logo:
  light: '/assets/karpenter/logo.png'
  dark: '/assets/karpenter/logo.png'
  height: '24px'
addonName: 'Karpenter'
footer:
  message: ''
  copyright: '© 2025 Amazon.com, Inc. or its affiliates. All Rights Reserved'

# VitePress hero settings
hero:
  name: Karpenter
  image:
    src: /assets/karpenter/hero.png
    alt: Karpenter
  text: Simplifies Kubernetes infrastructure with the right nodes at the right time
  tagline: Karpenter automatically launches just the right compute resources to handle your cluster's applications. It is designed to let you take full advantage of the cloud with fast and simple compute provisioning for Kubernetes clusters.
  actions:
    - theme: alt
      text: Get More Info
      link: https://karpenter.sh
features:
  - icon: 
      src: /assets/karpenter/globe.svg
    title: Improve application availability
    details: Karpenter responds quickly and automatically to changes in application load, scheduling, and resource requirements, placing new workloads onto a variety of available compute resource capacity.
  - icon: 
      src: /assets/karpenter/hand-holding-dollar.svg
    title: Lower compute costs
    details: Karpenter lowers cluster compute costs by looking for opportunities to remove under-utilized nodes, replace expensive nodes with cheaper alternatives, and consolidate workloads onto more efficient compute resources..
  - icon: 
      src: /assets/karpenter/wrench.svg
    title: Minimize operational overhead
    details: Karpenter comes with a set of opinionated defaults in a single, declarative NodePool resource which can easily be customized. No additional configuration required!


---

<style module>
:root {
  --vp-home-hero-name-color: rgb(92, 100, 171);
}
</style>

