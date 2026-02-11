#!/bin/bash

echo "Otimizando imagens existentes..."

cd images

shopt -s nullglob
for img in *.jpg *.jpeg *.png *.JPG *.JPEG *.PNG; do
  if [ -f "$img" ]; then
    original_size=$(stat -c%s "$img")
    echo "Processando: $img ($original_size bytes)"
    
    convert "$img" -strip -quality 85 -resize '2000x2000>' "temp_$img"
    mv "temp_$img" "$img"
    
    new_size=$(stat -c%s "$img")
    echo "  → Novo tamanho: $new_size bytes"
  fi
done

echo "Otimização concluída!"
