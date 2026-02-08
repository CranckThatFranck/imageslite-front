import * as Yup from 'yup';

export interface FormProps{
  name: string;
  tags: string;
  file: string | Blob;
}

export const formScheme: FormProps = { name: '', tags: '', file: '' };

export const formValidationScheme = Yup.object().shape({
    name: Yup.string().trim().required('O nome é obrigatório'),
    tags: Yup.string().trim().required('As tags são obrigatórias'),
    file: Yup.mixed<Blob>()
    .required('A imagem é obrigatória')
    .test('size', 'O arquivo é muito grande. O tamanho máximo permitido é 20MB.', (file) => {
        return file.size <= 20 * 1024 * 1024; // 20MB
    })
    .test('type', 'O arquivo deve ser uma imagem (JPEG, PNG, GIF, WEBP ou BMP).', (file) =>{
        return file.type === 'image/jpeg' ||
               file.type === 'image/png' ||
               file.type === 'image/gif' ||
               file.type === 'image/webp' ||
               file.type === 'image/bmp';
    })
})