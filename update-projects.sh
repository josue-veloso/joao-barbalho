#!/bin/bash
# Script para gerar índice de projetos

cd "$(dirname "$0")"

echo '{"projects":[' > content/projects.json

first=true
for file in content/projects/*.json; do
    if [ "$file" != "content/projects.json" ]; then
        if [ "$first" = true ]; then
            first=false
        else
            echo ',' >> content/projects.json
        fi
        cat "$file" | tr -d '\n' >> content/projects.json
    fi
done

echo ']}' >> content/projects.json

echo "Índice de projetos atualizado!"
