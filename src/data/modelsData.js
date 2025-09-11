export const modelsData = {
  "modeloOSI": [
    {
      "capa": 1,
      "nombre": "Física",
      "color": "#0a6789",
      "descripcion": "Se encarga de la transmisión real de bits a través de medios físicos, ya sea por cables, fibra óptica o medios inalámbricos. Define los estándares eléctricos, ópticos, mecánicos y de señalización que permiten que los dispositivos se comuniquen correctamente. Por ejemplo, decide cómo se representa un '1' y un '0' en el medio: puede ser un pulso eléctrico alto/bajo o un cambio de luz en fibra óptica.",
      "protocolos": ["Ethernet (nivel físico)", "RS-232", "DSL", "IEEE 802.3", "USB"],
      "dispositivos": ["Cables UTP", "Fibra óptica", "Coaxial", "Repetidores", "Hubs", "Modems"],
      "conceptosClave": ["Señales analógicas", "Señales digitales", "Codificación de línea", "Atenuación", "Velocidad de transmisión", "Medios de transmisión"],
      "info": "Los datos se convierten en señales eléctricas, ópticas o electromagnéticas para ser transmitidos a través del medio físico. Se define cómo se representan los bits (0s y 1s) en el medio de transmisión mediante técnicas de codificación como Manchester o NRZ."
    },
    {
      "capa": 2,
      "nombre": "Enlace de Datos",
      "color": "#0a996f",
      "descripcion": "Proporciona una conexión libre de errores entre nodos vecinos mediante la creación y gestión de tramas. Además, utiliza direcciones físicas (MAC) para identificar dispositivos en la misma red y controla el acceso al medio compartido. Por ejemplo, en Wi-Fi, esta capa decide quién puede 'hablar' y cuándo, para evitar colisiones.",
      "protocolos": ["Ethernet", "PPP", "HDLC", "Frame Relay", "IEEE 802.11"],
      "dispositivos": ["Switches", "Bridges", "Tarjetas de red (NIC)"],
      "conceptosClave": ["Tramas", "Dirección MAC", "Control de flujo", "Detección de errores", "CRC", "ARP"],
      "info": "Los bits se agrupan en tramas con direcciones MAC de origen y destino. Se añaden mecanismos de detección de errores (como CRC) y control de flujo. En redes compartidas, se implementan protocolos como CSMA/CD para evitar colisiones."
    },
    {
      "capa": 3,
      "nombre": "Red",
      "color": "#0a8969",
      "descripcion": "Gestiona el direccionamiento lógico y la selección de rutas entre redes distintas. Encapsula los datos en paquetes e implementa protocolos de enrutamiento para encontrar el mejor camino. Por ejemplo, si envías un correo desde Colombia a Japón, esta capa decide por qué routers pasará para llegar más rápido.",
      "protocolos": ["IPv4", "IPv6", "ICMP", "IGMP", "IPsec"],
      "dispositivos": ["Routers", "Gateways", "Firewalls de nivel 3"],
      "conceptosClave": ["Direcciones IP", "Subnetting", "NAT", "Routing", "RIP", "OSPF", "BGP"],
      "info": "Las tramas se encapsulan en paquetes con direcciones IP de origen y destino. Los routers examinan estas direcciones para determinar la ruta óptima mediante tablas de enrutamiento. Se puede fragmentar paquetes si exceden el MTU de alguna red intermedia."
    },
    {
      "capa": 4,
      "nombre": "Transporte",
      "color": "#f8c200ff",
      "descripcion": "Garantiza la entrega confiable (o no, según el protocolo) de datos extremo a extremo entre aplicaciones. Divide los mensajes en segmentos, controla la velocidad de transmisión y maneja la detección de errores. Por ejemplo, TCP establece una conexión confiable para ver un video en streaming, mientras que UDP se usa en llamadas VoIP para priorizar la velocidad.",
      "protocolos": ["TCP", "UDP", "SCTP", "DCCP"],
      "dispositivos": ["Balanceadores de carga", "Firewalls de nivel 4"],
      "conceptosClave": ["Segmentos", "Puertos", "Handshake de 3 vías", "Control de congestión", "Fiabilidad vs velocidad"],
      "info": "Los datos se dividen en segmentos (TCP) o datagramas (UDP). TCP establece conexiones con handshakes, numera segmentos, controla flujo y congestión, y retransmite datos perdidos. UDP simplemente encapsula y envía sin garantías."
    },
    {
      "capa": 5,
      "nombre": "Sesión",
      "color": "#fa6632",
      "descripcion": "Establece, administra y finaliza sesiones de comunicación entre aplicaciones. Permite que dos programas intercambien datos de forma ordenada y sincronizada. Por ejemplo, cuando participas en una videollamada, esta capa mantiene abierta la sesión para que la comunicación sea continua y estable.",
      "protocolos": ["NetBIOS", "RPC", "PPTP", "SMB"],
      "dispositivos": ["Servidores de autenticación", "Gateways de aplicaciones"],
      "conceptosClave": ["Control de sesión", "Puntos de sincronización", "Full-duplex", "Half-duplex"],
      "info": "Se establece, mantiene y finaliza el diálogo entre aplicaciones. Se gestionan tokens de sesión, se insertan puntos de sincronización para recuperación ante fallos, y se controla si la comunicación es full-duplex o half-duplex."
    },
    {
      "capa": 6,
      "nombre": "Presentación",
      "color": "#e85529",
      "descripcion": "Traduce, comprime y cifra los datos para que las aplicaciones puedan interpretarlos. Es como un 'intérprete' entre diferentes formatos. Por ejemplo, cuando visitas una página HTTPS, esta capa usa TLS para cifrar la información antes de enviarla.",
      "protocolos": ["SSL", "TLS", "JPEG", "GIF", "PNG", "ASCII", "MPEG"],
      "dispositivos": ["Servidores de cifrado", "Middleware"],
      "conceptosClave": ["Codificación de caracteres", "Compresión", "Encriptación", "Certificados", "Conversión de formatos"],
      "info": "Los datos se traducen entre formatos de aplicación y formatos de red estandarizados. Se aplica compresión para reducir el tamaño, cifrado para seguridad, y conversión entre codificaciones de caracteres (ASCII, Unicode, EBCDIC)."
    },
    {
      "capa": 7,
      "nombre": "Aplicación",
      "color": "#cf0638",
      "descripcion": "Proporciona servicios de red directamente al usuario final. Es donde interactúan las aplicaciones con la red. Por ejemplo, cuando envías un correo mediante Gmail o Outlook, esta capa utiliza SMTP para enviar y POP3/IMAP para recibir.",
      "protocolos": ["HTTP", "HTTPS", "FTP", "SMTP", "POP3", "IMAP", "DNS", "SNMP", "Telnet", "SSH"],
      "dispositivos": ["Servidores web", "Servidores DNS", "Servidores de correo"],
      "conceptosClave": ["APIs", "Cookies", "Sesiones", "Resolución de nombres", "Servicios distribuidos"],
      "info": "Los datos generados por las aplicaciones se preparan para su transmisión. Se inician solicitudes de servicios de red como transferencia de archivos, correo electrónico o navegación web. Es la interfaz entre el usuario y la red."
    }
  ],
  "modeloTCPIP": [
    {
      "capa": 1,
      "nombre": "Acceso a la Red",
      "color": "#0a6789",
      "descripcion": "Combina funciones de las capas Física y Enlace de Datos del modelo OSI. Se encarga de la transmisión física de los datos y del control de acceso al medio compartido. Por ejemplo, cuando conectas tu laptop a un router Wi-Fi, esta capa maneja la comunicación entre tu tarjeta de red y el punto de acceso.",
      "protocolos": ["Ethernet", "Wi-Fi", "ARP", "PPP", "ATM"],
      "dispositivos": ["Switches", "Hubs", "NICs", "Repetidores"],
      "conceptosClave": ["Direcciones MAC", "Tramas", "Control de acceso al medio", "MTU"],
      "info": "Los datos se convierten en señales adecuadas para el medio físico y se organizan en tramas con direcciones MAC. ARP resuelve direcciones IP a MAC. Se controla el acceso al medio para evitar colisiones en redes compartidas."
    },
    {
      "capa": 2,
      "nombre": "Internet",
      "color": "#0a8969",
      "descripcion": "Es responsable de direccionar y encaminar los paquetes de datos a través de múltiples redes hasta su destino final. Por ejemplo, si accedes a Google desde tu casa, esta capa usa tu dirección IP y protocolos como IPv6 para que la solicitud llegue a los servidores correctos.",
      "protocolos": ["IPv4", "IPv6", "ICMP", "IGMP", "IPsec"],
      "dispositivos": ["Routers", "Firewalls", "Gateways"],
      "conceptosClave": ["Direcciones IP", "Enrutamiento", "Fragmentación de paquetes", "NAT", "PAT"],
      "info": "Los datos se encapsulan en paquetes IP con direcciones de origen y destino. Los routers examinan estas direcciones para encaminar los paquetes através de la red. Se puede aplicar NAT/PAT para traducir entre direcciones privadas y públicas."
    },
    {
      "capa": 3,
      "nombre": "Transporte",
      "color": "#f8c200ff",
      "descripcion": "Asegura que los datos lleguen desde una aplicación de origen hasta otra en el destino. Administra la segmentación, la detección de errores y el control de flujo. Por ejemplo, cuando descargas un archivo pesado con TCP, esta capa garantiza que llegue completo y en orden.",
      "protocolos": ["TCP", "UDP", "SCTP"],
      "dispositivos": ["Balanceadores de carga", "Firewalls de nivel 4"],
      "conceptosClave": ["Puertos", "Segmentos", "Datagramas", "Handshake TCP", "Fiabilidad vs velocidad"],
      "info": "Los datos se segmentan y se añaden encabezados con puertos de origen y destino. TCP establece conexiones confiables con control de flujo y congestión, mientras que UDP ofrece un servicio sin conexión más rápido pero menos confiable."
    },
    {
      "capa": 4,
      "nombre": "Aplicación",
      "color": "#cf0638",
      "descripcion": "Combina las funciones de Aplicación, Presentación y Sesión del modelo OSI. Proporciona directamente servicios de red a los programas del usuario. Por ejemplo, cuando ves un video en YouTube, esta capa gestiona el protocolo HTTPS y la API para que tu navegador reciba la transmisión.",
      "protocolos": ["HTTP", "HTTPS", "FTP", "SMTP", "DNS", "SNMP", "Telnet", "SSH"],
      "dispositivos": ["Servidores web", "Servidores DNS", "Proxies", "APIs"],
      "conceptosClave": ["Servicios cliente-servidor", "APIs REST", "APIs SOAP", "Cifrado TLS/SSL", "Cookies", "Sesiones"],
      "info": "Los datos de aplicación se formatean según protocolos específicos (HTTP, FTP, SMTP). Se aplica cifrado TLS/SSL para seguridad, compresión para eficiencia, y se gestionan sesiones con cookies o tokens para mantener el estado."
    }
  ]
};