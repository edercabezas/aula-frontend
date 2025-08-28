export interface ProfileInterface {
  basic_info?: {
    first_name?: string;
    last_name?: string;
    telefono?: number;
    tipo_naturaleza?: string;
    biografia?: string;
    documento?: number;
    linkedin?: string;
    twitter?: string;
    github?: string;
    sitio_web?: string;
    esta_verificado?: boolean;
    foto?: string;
    email?: string;
    redes_sociales?: {
      github?: string;
      linkedin?: string;
      sitio_web?: string;
      twitter?: string;
    };
  };

  tipo_usuario?: string;
}
