---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# Addon-specific settings
title: 'Single Sign On'
navbar: false
logo:
  light: https://nh-addons.s3.us-east-1.amazonaws.com/oauth2-proxy/logo.png
  dark: https://nh-addons.s3.us-east-1.amazonaws.com/oauth2-proxy/logo-dark.png
  height: '24px'
addonName: 'Single Sign On'
footer:
  message: 
  copyright: Copyright © 2025 Nethopper
homeHeroNameColor: rgb(0, 255, 0)

# VitePress hero settings
hero:
  name: Single Sign On
  image:
    src: /assets/oauth2-proxy/hero.svg
    alt: Single Sign On
  text: Authenticating proxy fronting your web application.
  tagline: A reverse proxy and static file server that provides authentication using Providers (Google, Keycloak, GitHub and others) to validate accounts by email, domain or group.

  actions:
    - theme: alt
      text: Get More Info
      link: https://oauth2-proxy.github.io/oauth2-proxy/
features:
  - icon: 
      src: /assets/oauth2-proxy/handshake-duotone-solid.svg
    title: Centralized Authentication
    details: Simplify securing multiple applications by delegating authentication to a single OAuth2 or OIDC provider, enabling Single Sign-On (SSO) even for apps that don't natively support these protocols.
  - icon: 
      src: /assets/oauth2-proxy/shield-check-duotone-solid.svg
    title: Enhanced Security
    details: By acting as a reverse proxy, it protects applications from unauthorized access and ensures secure communication with identity providers.
  - icon: 
      src: /assets/oauth2-proxy/check-duotone-solid.svg
    title: Ease of Integration
    details: OAuth2 Proxy can integrate with various identity providers (e.g., Google, GitHub, Microsoft), requiring no code changes in the protected applications.
  - icon: 
      src: /assets/oauth2-proxy/sliders-duotone-solid.svg
    title: Flexibility
    details: Supports multiple configurations, such as standalone proxy or middleware, and enables fine-grained access control based on user attributes like email or group.



---

<style module>
</style>

