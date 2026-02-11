#!/usr/bin/env python3
import os
from PIL import Image
import sys

def optimize_image(filepath):
    try:
        with Image.open(filepath) as img:
            original_size = os.path.getsize(filepath)
            
            # Convert RGBA to RGB if needed
            if img.mode == 'RGBA':
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[3])
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize if too large
            max_size = 2000
            if img.width > max_size or img.height > max_size:
                img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
            
            # Save optimized
            img.save(filepath, 'JPEG', quality=85, optimize=True)
            
            new_size = os.path.getsize(filepath)
            saved = original_size - new_size
            print(f"✓ {os.path.basename(filepath)}: {original_size//1024}KB → {new_size//1024}KB (economizou {saved//1024}KB)")
            
    except Exception as e:
        print(f"✗ Erro em {filepath}: {e}")

if __name__ == "__main__":
    images_dir = "images"
    
    if not os.path.exists(images_dir):
        print(f"Pasta {images_dir} não encontrada")
        sys.exit(1)
    
    print("Otimizando imagens...\n")
    
    for filename in os.listdir(images_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(images_dir, filename)
            optimize_image(filepath)
    
    print("\nOtimização concluída!")
