apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: kubeview
spec:
  parentRefs:
    - name: {{ .Values.gateway.name }}
      sectionName: {{ .Values.gateway.listenerName }}
  hostnames:
    - {{ .Values.gateway.hostname | quote }}
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - name: {{ .Values.gateway.serviceName }}
          port: {{ .Values.gateway.servicePort }}
