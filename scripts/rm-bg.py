from PIL import Image

def remove_background(image_path, output_path, target_color, tolerance=10):
    """
    Enlève le fond d'une image proche d'une couleur donnée et met la transparence.
    
    :param image_path: chemin vers l'image d'entrée (PNG)
    :param output_path: chemin pour enregistrer l'image de sortie
    :param target_color: tuple RGB de la couleur du fond à supprimer (ex: (255, 252, 248))
    :param tolerance: tolérance pour les couleurs proches
    """
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        r, g, b, a = item
        if (abs(r - target_color[0]) <= tolerance and
            abs(g - target_color[1]) <= tolerance and
            abs(b - target_color[2]) <= tolerance):
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Image enregistrée avec fond transparent : {output_path}")

if __name__ == "__main__":
    target_rgb = (255, 252, 248)
    remove_background("image.png", "image_output.png", target_rgb, tolerance=10)
