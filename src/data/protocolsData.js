export const protocolsData = {
  modeloOSI: {
    capa1: [
      {
        nombre: "Ethernet (Physical Layer)",
        siglas: "IEEE 802.3",
        info: "Define el estándar para redes Ethernet cableadas, especificando características eléctricas y físicas",
        descripcion: "Protocolo para redes de área local (LAN) que establece los estándares físicos de conexión, incluyendo tipos de cables, conectores y señales eléctricas."
      },
      {
        nombre: "RS-232",
        siglas: "RS-232",
        info: "Estándar para comunicación serial entre dispositivos",
        descripcion: "Interfaz estándar para comunicación serial de datos que define los aspectos eléctricos y mecánicos de la conexión."
      },
      {
        nombre: "Digital Subscriber Line",
        siglas: "DSL",
        info: "Transmisión de datos digitales a través de líneas telefónicas",
        descripcion: "Tecnología que permite la transmisión de datos digitales a alta velocidad utilizando líneas telefónicas convencionales."
      },
      {
        nombre: "Universal Serial Bus",
        siglas: "USB",
        info: "Estándar para conexión y comunicación con dispositivos periféricos",
        descripcion: "Protocolo de bus que estandariza la conexión, comunicación y alimentación eléctrica entre dispositivos electrónicos."
      },
      {
        nombre: "Bluetooth Physical Layer",
        siglas: "IEEE 802.15.1",
        info: "Comunicación inalámbrica de corto alcance entre dispositivos",
        descripcion: "Protocolo para redes personales inalámbricas (WPAN) que permite la comunicación a corta distancia entre dispositivos."
      }
    ],
    capa2: [
      {
        nombre: "Ethernet (Data Link)",
        siglas: "IEEE 802.3",
        info: "Control de acceso al medio y detección de errores en redes LAN",
        descripcion: "Protocolo que gestiona el acceso al medio compartido, la detección de colisiones y el formateo de tramas de datos."
      },
      {
        nombre: "Point-to-Point Protocol",
        siglas: "PPP",
        info: "Conexión directa entre dos nodos de red",
        descripcion: "Protocolo de enlace de datos utilizado para establecer una conexión directa entre dos nodos, comúnmente usado en conexiones de acceso telefónico."
      },
      {
        nombre: "High-Level Data Link Control",
        siglas: "HDLC",
        info: "Protocolo de comunicación orientado a bits para enlaces punto a punto",
        descripcion: "Protocolo de capa de enlace de datos que proporciona comunicación confiable orientada a bits sobre enlaces punto a punto y multipunto."
      },
      {
        nombre: "Frame Relay",
        siglas: "FR",
        info: "Tecnología de conmutación de paquetes para redes WAN",
        descripcion: "Protocolo de conmutación de paquetes que opera en la capa de enlace de datos, utilizado principalmente para interconectar redes de área local sobre áreas geográficas extensas."
      },
      {
        nombre: "Wi-Fi (MAC Layer)",
        siglas: "IEEE 802.11",
        info: "Control de acceso al medio para redes inalámbricas",
        descripcion: "Protocolo que gestiona el acceso al medio inalámbrico, la detección de colisiones y la gestión de tramas en redes Wi-Fi."
      },
      {
        nombre: "Address Resolution Protocol",
        siglas: "ARP",
        info: "Mapeo de direcciones IP a direcciones MAC",
        descripcion: "Protocolo utilizado para encontrar la dirección de hardware (MAC) asociada a una dirección IP en una red local."
      }
    ],
    capa3: [
      {
        nombre: "Internet Protocol version 4",
        siglas: "IPv4",
        info: "Direccionamiento y routing de paquetes en redes",
        descripcion: "Protocolo principal de la capa de red que proporciona direccionamiento lógico y capacidades de routing para la entrega de paquetes a través de redes."
      },
      {
        nombre: "Internet Protocol version 6",
        siglas: "IPv6",
        info: "Sucesor de IPv4 con mayor espacio de direccionamiento",
        descripcion: "Versión mejorada del protocolo IP que ofrece un espacio de direcciones mucho mayor y características de seguridad integradas."
      },
      {
        nombre: "Internet Control Message Protocol",
        siglas: "ICMP",
        info: "Mensajes de control y error para protocolos de red",
        descripcion: "Protocolo utilizado por dispositivos de red para enviar mensajes de error y información operativa sobre el estado de la red."
      },
      {
        nombre: "Internet Group Management Protocol",
        siglas: "IGMP",
        info: "Gestión de membresía de grupos multicast",
        descripcion: "Protocolo de comunicaciones utilizado por hosts y routers IPv4 para establecer membresías de grupos multicast."
      },
      {
        nombre: "IP Security",
        siglas: "IPsec",
        info: "Suite de protocolos para comunicación segura a nivel IP",
        descripcion: "Conjunto de protocolos que proporcionan seguridad a nivel de red mediante autenticación y cifrado de paquetes IP."
      },
      {
        nombre: "Routing Information Protocol",
        siglas: "RIP",
        info: "Protocolo de routing por vector de distancias",
        descripcion: "Protocolo de routing dinámico que utiliza el algoritmo de vector de distancias para determinar la mejor ruta hacia destinos de red."
      }
    ],
    capa4: [
      {
        nombre: "Transmission Control Protocol",
        siglas: "TCP",
        info: "Protocolo orientado a conexión con entrega confiable",
        descripcion: "Protocolo de transporte que proporciona comunicación confiable, orientada a conexión, con control de flujo y congestión."
      },
      {
        nombre: "User Datagram Protocol",
        siglas: "UDP",
        info: "Protocolo no orientado a conexión para transmisión rápida",
        descripcion: "Protocolo de transporte sin conexión que ofrece un servicio de datagramas mínimo sin garantías de entrega o orden."
      },
      {
        nombre: "Stream Control Transmission Protocol",
        siglas: "SCTP",
        info: "Protocolo de transporte con multidifusión y multihoming",
        descripcion: "Protocolo de transporte que combina características de TCP y UDP, diseñado para aplicaciones que requieren alta disponibilidad."
      },
      {
        nombre: "Datagram Congestion Control Protocol",
        siglas: "DCCP",
        info: "Protocolo de transporte para flujos de datos en tiempo real",
        descripcion: "Protocolo de transporte que proporciona flujos de datos bidireccionales no confiables con control de congestión."
      }
    ],
    capa5: [
      {
        nombre: "Network Basic Input/Output System",
        siglas: "NetBIOS",
        info: "Servicios de sesión para aplicaciones en redes locales",
        descripcion: "Protocolo que proporciona servicios de sesión para permitir que las aplicaciones se comuniquen a través de una red de área local."
      },
      {
        nombre: "Remote Procedure Call",
        siglas: "RPC",
        info: "Ejecución de procedimientos en equipos remotos",
        descripcion: "Protocolo que permite a un programa ejecutar procedimientos o infoes en otro equipo a través de la red."
      },
      {
        nombre: "Point-to-Point Tunneling Protocol",
        siglas: "PPTP",
        info: "Implementación de redes privadas virtuales (VPN)",
        descripcion: "Protocolo utilizado para implementar redes privadas virtuales, permitiendo la creación de túneles seguros a través de redes públicas."
      },
      {
        nombre: "Server Message Block",
        siglas: "SMB",
        info: "Compartición de archivos e impresoras en redes",
        descripcion: "Protocolo de red que permite compartir archivos, impresoras y puertos serie entre nodos en una red."
      }
    ],
    capa6: [
      {
        nombre: "Secure Sockets Layer",
        siglas: "SSL",
        info: "Cifrado de comunicaciones para seguridad web",
        descripcion: "Protocolo criptográfico diseñado para proporcionar comunicaciones seguras a través de una red, precursor de TLS."
      },
      {
        nombre: "Transport Layer Security",
        siglas: "TLS",
        info: "Sucesor de SSL para comunicaciones seguras",
        descripcion: "Protocolo criptográfico que proporciona privacidad e integridad de datos entre aplicaciones que se comunican a través de una red."
      },
      {
        nombre: "Joint Photographic Experts Group",
        siglas: "JPEG",
        info: "Compresión de imágenes fotográficas",
        descripcion: "Método de compresión con pérdida utilizado para imágenes digitales, particularmente para fotografías."
      },
      {
        nombre: "Graphics Interchange Format",
        siglas: "GIF",
        info: "Formato de imagen para gráficos con animación",
        descripcion: "Formato de imagen bitmap que admite animaciones y transparencias, ampliamente utilizado en la web."
      },
      {
        nombre: "Portable Network Graphics",
        siglas: "PNG",
        info: "Formato de imagen sin pérdida con transparencia",
        descripcion: "Formato de compresión de imágenes sin pérdida que admite transparencia y fue creado como alternativa a GIF."
      },
      {
        nombre: "American Standard Code for Information Interchange",
        siglas: "ASCII",
        info: "Codificación de caracteres para texto plano",
        descripcion: "Código de caracteres basado en el alfabeto latino que se utiliza para representar texto en computadoras y dispositivos de comunicaciones."
      }
    ],
    capa7: [
      {
        nombre: "Hypertext Transfer Protocol",
        siglas: "HTTP",
        info: "Transferencia de información en la World Wide Web",
        descripcion: "Protocolo de aplicación para sistemas de información hipermedia distribuidos y colaborativos, base de la web."
      },
      {
        nombre: "HTTP Secure",
        siglas: "HTTPS",
        info: "Versión segura de HTTP con cifrado TLS/SSL",
        descripcion: "Extensión segura de HTTP que utiliza cifrado TLS/SSL para proteger la confidencialidad e integridad de los datos."
      },
      {
        nombre: "File Transfer Protocol",
        siglas: "FTP",
        info: "Transferencia de archivos entre cliente y servidor",
        descripcion: "Protocolo de red para la transferencia de archivos entre un cliente y un servidor en una red basada en TCP."
      },
      {
        nombre: "Simple Mail Transfer Protocol",
        siglas: "SMTP",
        info: "Envío y transmisión de correo electrónico",
        descripcion: "Protocolo estándar para el envío de correo electrónico a través de Internet entre servidores de correo."
      },
      {
        nombre: "Post Office Protocol version 3",
        siglas: "POP3",
        info: "Recuperación de correo electrónico desde servidor",
        descripcion: "Protocolo utilizado por clientes de correo electrónico para recuperar mensajes de un servidor de correo."
      },
      {
        nombre: "Internet Message Access Protocol",
        siglas: "IMAP",
        info: "Acceso y gestión de correo en servidor remoto",
        descripcion: "Protocolo que permite a los clientes de correo electrónico acceder y gestionar mensajes almacenados en un servidor."
      },
      {
        nombre: "Domain Name System",
        siglas: "DNS",
        info: "Resolución de nombres de dominio a direcciones IP",
        descripcion: "Sistema de nomenclatura jerárquico y descentralizado para dispositivos conectados a redes IP, como Internet."
      },
      {
        nombre: "Simple Network Management Protocol",
        siglas: "SNMP",
        info: "Gestión y monitorización de dispositivos de red",
        descripcion: "Protocolo de capa de aplicación para recopilar y organizar información sobre dispositivos gestionados en redes IP."
      },
      {
        nombre: "Telecommunication Network",
        siglas: "Telnet",
        info: "Acceso remoto a servidores mediante terminal virtual",
        descripcion: "Protocolo de red que proporciona una interfaz de línea de comandos bidireccional orientada a comunicaciones mediante texto."
      },
      {
        nombre: "Secure Shell",
        siglas: "SSH",
        info: "Conexión segura y cifrada a servidores remotos",
        descripcion: "Protocolo de red criptográfico para operar servicios de red de forma segura sobre una red no segura."
      }
    ]
  },
  modeloTCPIP: {
    capa1: [
      {
        nombre: "Ethernet",
        siglas: "IEEE 802.3",
        info: "Estándar para redes LAN cableadas con control de acceso al medio",
        descripcion: "Tecnología de red de área local que define los estándares físicos y de enlace de datos para redes cableadas."
      },
      {
        nombre: "Wi-Fi",
        siglas: "IEEE 802.11",
        info: "Redes inalámbricas de área local con control de acceso",
        descripcion: "Conjunto de protocolos para redes inalámbricas de área local que permite la conexión de dispositivos sin cables."
      },
      {
        nombre: "Address Resolution Protocol",
        siglas: "ARP",
        info: "Mapeo entre direcciones IP y direcciones físicas MAC",
        descripcion: "Protocolo utilizado para encontrar la dirección de hardware asociada a una dirección IP en una red local."
      },
      {
        nombre: "Point-to-Point Protocol",
        siglas: "PPP",
        info: "Conexión directa entre dos nodos de red",
        descripcion: "Protocolo de enlace de datos utilizado para establecer una conexión directa entre dos nodos en una red."
      },
      {
        nombre: "Asynchronous Transfer Mode",
        siglas: "ATM",
        info: "Tecnología de conmutación de celdas para redes de alta velocidad",
        descripcion: "Tecnología de red que utiliza conmutación de celdas para la transmisión de datos, voz y video a alta velocidad."
      }
    ],
    capa2: [
      {
        nombre: "Internet Protocol version 4",
        siglas: "IPv4",
        info: "Direccionamiento lógico y routing de paquetes",
        descripcion: "Protocolo fundamental de Internet que proporciona direccionamiento lógico y capacidades de routing."
      },
      {
        nombre: "Internet Protocol version 6",
        siglas: "IPv6",
        info: "Sucesor de IPv4 con direccionamiento extendido",
        descripcion: "Versión mejorada del protocolo IP diseñada para abordar el agotamiento de direcciones IPv4."
      },
      {
        nombre: "Internet Control Message Protocol",
        siglas: "ICMP",
        info: "Mensajes de control y diagnóstico de red",
        descripcion: "Protocolo utilizado para enviar mensajes de error y información operativa sobre el estado de la red."
      },
      {
        nombre: "Internet Group Management Protocol",
        siglas: "IGMP",
        info: "Gestión de grupos multicast en redes IP",
        descripcion: "Protocolo de comunicaciones utilizado por hosts y routers para establecer membresías de grupos multicast."
      },
      {
        nombre: "IP Security",
        siglas: "IPsec",
        info: "Seguridad a nivel de IP para comunicaciones cifradas",
        descripcion: "Conjunto de protocolos que proporcionan autenticación y cifrado a nivel de paquete IP."
      }
    ],
    capa3: [
      {
        nombre: "Transmission Control Protocol",
        siglas: "TCP",
        info: "Comunicación confiable orientada a conexión",
        descripcion: "Protocolo de transporte que garantiza la entrega confiable de datos con control de flujo y congestión."
      },
      {
        nombre: "User Datagram Protocol",
        siglas: "UDP",
        info: "Comunicación no confiable sin conexión",
        descripcion: "Protocolo de transporte simple que ofrece un servicio de datagramas mínimo sin garantías de entrega."
      },
      {
        nombre: "Stream Control Transmission Protocol",
        siglas: "SCTP",
        info: "Transporte con multidifusión y tolerancia a fallos",
        descripcion: "Protocolo de transporte que proporciona características avanzadas como multidifusión y multihoming."
      }
    ],
    capa4: [
      {
        nombre: "Hypertext Transfer Protocol",
        siglas: "HTTP",
        info: "Protocolo de aplicación web para transferencia de datos",
        descripcion: "Protocolo de aplicación que permite la transferencia de información en la World Wide Web."
      },
      {
        nombre: "HTTP Secure",
        siglas: "HTTPS",
        info: "HTTP con capa de seguridad mediante cifrado",
        descripcion: "Versión segura de HTTP que utiliza cifrado TLS/SSL para proteger las comunicaciones."
      },
      {
        nombre: "File Transfer Protocol",
        siglas: "FTP",
        info: "Transferencia de archivos entre sistemas",
        descripcion: "Protocolo estándar para la transferencia de archivos entre un cliente y un servidor en una red."
      },
      {
        nombre: "Simple Mail Transfer Protocol",
        siglas: "SMTP",
        info: "Envío y transmisión de correo electrónico",
        descripcion: "Protocolo utilizado para el envío de mensajes de correo electrónico entre servidores."
      },
      {
        nombre: "Domain Name System",
        siglas: "DNS",
        info: "Resolución de nombres de dominio a direcciones IP",
        descripcion: "Sistema distribuido que traduce nombres de dominio legibles por humanos en direcciones IP numéricas."
      },
      {
        nombre: "Simple Network Management Protocol",
        siglas: "SNMP",
        info: "Gestión y monitorización de dispositivos de red",
        descripcion: "Protocolo para recopilar y organizar información sobre dispositivos en redes IP."
      },
      {
        nombre: "Secure Shell",
        siglas: "SSH",
        info: "Conexión segura y cifrada a sistemas remotos",
        descripcion: "Protocolo criptográfico para operar servicios de red de forma segura sobre redes no seguras."
      }
    ]
  }
};