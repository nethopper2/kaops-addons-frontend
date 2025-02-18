---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# Addon-specific settings
title: 'Ollama'
navbar: false
logo:
  light: https://nh-addons.s3.us-east-1.amazonaws.com/ollama/logo.png
  dark: https://nh-addons.s3.us-east-1.amazonaws.com/ollama/logo-dark.png
  height: '24px'
addonName: 'Ollama'
footer:
  message: 'Documentation Distributed under CC BY 4.0.  The Linux Foundation® (TLF) has registered trademarks and uses trademarks. For a list of TLF trademarks, see: Trademark Usage.'
  copyright: ''
homeHeroNameColor: rgb(10, 123, 255)

# VitePress hero settings
hero:
  name: Ollama
  image:
    src: /assets/ollama/hero.png
    alt: Ollama
  text: Deploy and run on Kubernetes clusters to manage LLMs in containerized environments
  tagline: Deploying Ollama on Kubernetes provides organizations with a powerful way to leverage LLMs while maintaining control over their infrastructure and data privacy.

  actions:
    - theme: alt
      text: Get More Info
      link: https://ollama.com
features:
  - icon: 
      src: /assets/ollama/feature.jpg
    title: Deployment Options
    details: Ollama can be deployed on Kubernetes using various methods, including Helm charts, custom Kubernetes manifests, and community-developed operators.
  - icon: 
      src: /assets/ollama/feature.jpg
    title: GPU Support
    details: Kubernetes clusters can be configured with GPU-enabled node pools to efficiently run Ollama's LLMs, which often require significant computational resources
  - icon: 
      src: /assets/ollama/feature.jpg
    title: Scalability
    details: Running Ollama on Kubernetes allows for easy scaling of LLM deployments to meet varying workload demands
  - icon: 
      src: /assets/ollama/feature.jpg
    title: Custom Configurations
    details: Users can create custom entrypoint scripts and ConfigMaps to automate the startup of Ollama services and model pulling within Kubernetes pods
  - icon: 
      src: /assets/ollama/feature.jpg
    title: Integration with Web UIs
    details: Ollama can be deployed alongside web interfaces like Open WebUI, providing a user-friendly way to interact with the models running on Kubernetes
  - icon: 
      src: /assets/ollama/feature.jpg
    title: Security Considerations
    details: Deployments can be secured using OAuth2 and Keycloak integration, ensuring proper access control to the LLM services
  - icon: 
      src: /assets/ollama/feature.jpg
    title: Development Workflows
    details: Tools like DevSpace can be used in conjunction with Ollama on Kubernetes to create efficient development environments for AI applications
  - icon: 
      src: /assets/ollama/feature.jpg
    title: Cross-Kubernetes Compatibility
    details: Some Ollama operators aim to extend the Ollama experience across different Kubernetes clusters, including edge and cloud infrastructures

---

<style module>
</style>

