'use client';

interface ImageCardProps {
    nome?: string;
    tamanho?: string;
    dataUpload?: string;
    src?: string;
    extension?: string;
}

export const ImageCard: React.FC<ImageCardProps> = (props: ImageCardProps) => {

    async function download() {
        if (!props.src) {
            return;
        }

        const safeName = props.nome?.trim() || 'imagem';
        const safeExtension = props.extension?.replace(/^\./, '').trim();
        const fileName = safeExtension ? `${safeName}.${safeExtension}` : safeName;

        const response = await fetch(props.src);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }

    return (
        <div className="card relative bg-white rounded-md shadow-md transition-transform ease-in duration-300 transform hover:shadow-lg hover:translate-y-2">
            <img onClick={() => { void download(); }} src={props.src} className="h-56 w-full object-cover rounded-t-md" alt=""/>
            <div className="card-body p-4">
                <h5 className="text-x1 font-semibold mb-2 text-gray-600">{props.nome}</h5>
                <p className="text-gray-600">{props.extension}</p>
                <p className="text-gray-600">{formatBytes(Number(props.tamanho))}</p>
                <p className="text-gray-600">{props.dataUpload}</p>
            </div>
        </div>
    )
}

function formatBytes(bytes: number = 0, decimals = 2){
    if (!+bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
} 