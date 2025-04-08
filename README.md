"# 64_Halls_KubeDock" 

kubectl get all
kubectl apply -f .
kubectl delete -f .

docker pull luk4om/...
docker run -d --name luk4om/halls-k8s -p 3000:3000