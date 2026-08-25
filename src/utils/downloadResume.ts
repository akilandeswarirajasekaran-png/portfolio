/**
 * Utility to download the official resume PDF directly.
 * Designed to work seamlessly on localhost, production, and GitHub Pages deployments.
 */
export const getResumePdfUrl = (): string => {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}AKILANDESWARI_R_Resume.pdf`;
};

export const downloadResumePdf = async (): Promise<void> => {
  const resumeUrl = getResumePdfUrl();
  const fileName = 'AKILANDESWARI_R_Resume.pdf';

  try {
    const response = await fetch(resumeUrl);
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);
  } catch (error) {
    console.warn('Blob download fallback to direct anchor:', error);
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
