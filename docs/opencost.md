---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# Addon-specific settings
title: 'OpenCost'
navbar: false
logo:
  light: '/assets/opencost/logo-signature-light.png'
  dark: '/assets/opencost/logo-signature-dark.png'
  height: '24px'
addonName: ''
footer:
  message: 'Documentation Distributed under CC BY 4.0.  The Linux Foundation® (TLF) has registered trademarks and uses trademarks. For a list of TLF trademarks, see: Trademark Usage.'
  copyright: ''
homeHeroNameColor: rgb(85, 181, 85)

# VitePress hero settings
hero:
  name: OpenCost
  image:
    src: /assets/opencost/hero.png
    alt: OpenCost
  text: "Open source cost monitoring for cloud native environments"
  tagline: OpenCost is a vendor-neutral open source project for measuring and allocating cloud infrastructure and container costs in real time. Built by Kubernetes experts and supported by Kubernetes practitioners, OpenCost shines a light into the black box of Kubernetes spend.
  actions:
    - theme: alt
      text: Get More Info
      link: https://opencost.io
features:
  - icon: 
      src: /assets/opencost/cost-allocation.svg
    title: Cost Allocation
    details: Real-time cost allocation, broken down by Kubernetes concepts to the container level
  - icon: 
      src: /assets/opencost/asset-pricing.svg
    title: Asset Pricing
    details: Dynamic asset pricing, through integrations with AWS, Azure, and GCP billing APIs as well as support for on-prem Kubernetes clusters using custom pricing
  - icon: 
      src: /assets/opencost/custom.svg
    title: Resource Allocation
    details: Allocation for in-cluster resources like CPU, GPU, memory, load balancers and persistent volumes
  - icon: 
      src: /assets/opencost/out-of-cluster.svg
    title: Out-of-Cluster Costs
    details: Monitor costs outside the Kubernetes cluster from the cloud provider, resource like object storage, databases and other managed services
  - icon: 
      src: /assets/opencost/export.svg
    title: Integrations
    details: Integrations with other open source tooling, such as easy pricing data exports to Prometheus
  - icon: 
      src: /assets/opencost/open-source.svg
    title: Open Source
    details: Forever free and open source, supported and maintained by experts

---

<style module>
</style>

