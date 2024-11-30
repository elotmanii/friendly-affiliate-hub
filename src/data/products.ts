import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "Sony WH-1000XM4 Wireless Headphones",
    price: 299.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    ],
    category: "Electronics",
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo.",
    discount: 20,
    features: [
      "Industry-leading noise cancellation",
      "Up to 30-hour battery life",
      "Touch Sensor controls",
      "Speak-to-chat technology",
      "Wearing detection",
    ],
    specs: {
      "Battery Life": "Up to 30 hours",
      "Bluetooth Version": "5.0",
      Weight: "254g",
      "Charging Time": "3 hours",
      "Driver Unit": "40mm",
    },
    reviews: [
      {
        id: "1",
        rating: 5,
        comment: "Best noise cancelling headphones I've ever used!",
        author: "John D.",
        date: "2024-02-15",
        verified: true,
      },
      {
        id: "2",
        rating: 4,
        comment: "Great sound quality but a bit pricey",
        author: "Sarah M.",
        date: "2024-02-10",
        verified: true,
      },
    ],
    affiliateLinks: {
      amazon:
        "https://www.amazon.com/Apple-AirPods-Pro-Generation-Wireless/dp/B0DHWTDQD4/ref=sr_1_2?crid=1JTBGF8YWMRVY&dib=eyJ2IjoiMSJ9.kqdLt_HcIyfgDEd8_3pLcMrkWbuNtlBA7F1WEirAE4IssVQ3SAp-c-HCxFQGRB2g504NFEsqsaaOvhGRF7T_c-xdrqstDWY8kG11KUHCv6fJP4QlvCX2GsiBfeUTQtv3dGTRV4VE3isW41lS7DhoMmhqM8__UqrzaSaBspPjGah8u-q442wzwoC5VzGKjS0TqWgXT5AhbtzeNlhNXFABtOJxqK3Qw1HbOp20rCjXGOY.vu1HZfs9x18Prv-hPzIEhrIGRUiGS51nsd30ArbCS4k&dib_tag=se&keywords=airpods&qid=1732983296&sprefix=airpod%2Caps%2C260&sr=8-2&th=1",
      ebay: "https://www.ebay.fr/itm/186645736593?_skw=airpods&itmmeta=01JDYXXZFAY2MQF09G6PDSXSSH&hash=item2b74f3ec91:g:PkYAAOSwuFFmxhgp&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKkAJrci5p9GqkiZpmZRd%2Fs4tPlj2fByYCPUQF24pBscvTYj6Ioh4mbsQFBYUlpusl7m0%2BOHGzSzCdUiMCruOTl2O8rlUKmxBxjHdxixHPgfGYvtUhxuKwKXVpLR0b4DilebuutQI6XQAs%2BNj7DznUHxtl%2BiscKCeV8nU%2BqaMYp0bH5jzDTDSNN93kslJZA%2FCnEKtPTf43x0dTL7S9lMTa4kMXwNqPRtQGfWwAIwmvDbgwl2ijRVum078iPhzHP9N1rkilEui2y0P6pvlUDEJlta%7Ctkp%3ABFBM3Pf33e9k",

      aliexpress: "https://aliexpress.com/example",
    },
    socialLinks: {
      telegram: "https://t.me/yourgroup",
      facebook: "https://facebook.com/groups/yourgroup",
    },
  },
  {
    id: 2,
    title: "Apple AirPods Pro",
    price: 249.99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    ],
    category: "Electronics",
    description:
      "Active Noise Cancellation for immersive sound. Transparency mode for hearing what's happening around you.",
    discount: 15,
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Adaptive EQ",
      "Spatial audio",
      "Water resistant",
    ],
    specs: {
      "Battery Life": "4.5 hours",
      "Charging Case": "24 hours total",
      Connectivity: "H1 chip",
      "Water Resistance": "IPX4",
      Weight: "5.4g each",
    },
    reviews: [
      {
        id: "3",
        rating: 5,
        comment: "Perfect integration with iPhone",
        author: "Mike R.",
        date: "2024-02-14",
        verified: true,
      },
    ],
    affiliateLinks: {
      amazon:
        "https://www.amazon.com/Apple-AirPods-Pro-Generation-Wireless/dp/B0DHWTDQD4/ref=sr_1_2?crid=1JTBGF8YWMRVY&dib=eyJ2IjoiMSJ9.kqdLt_HcIyfgDEd8_3pLcMrkWbuNtlBA7F1WEirAE4IssVQ3SAp-c-HCxFQGRB2g504NFEsqsaaOvhGRF7T_c-xdrqstDWY8kG11KUHCv6fJP4QlvCX2GsiBfeUTQtv3dGTRV4VE3isW41lS7DhoMmhqM8__UqrzaSaBspPjGah8u-q442wzwoC5VzGKjS0TqWgXT5AhbtzeNlhNXFABtOJxqK3Qw1HbOp20rCjXGOY.vu1HZfs9x18Prv-hPzIEhrIGRUiGS51nsd30ArbCS4k&dib_tag=se&keywords=airpods&qid=1732983296&sprefix=airpod%2Caps%2C260&sr=8-2&th=1",
      ebay: "https://www.ebay.fr/itm/186645736593?_skw=airpods&itmmeta=01JDYXXZFAY2MQF09G6PDSXSSH&hash=item2b74f3ec91:g:PkYAAOSwuFFmxhgp&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKkAJrci5p9GqkiZpmZRd%2Fs4tPlj2fByYCPUQF24pBscvTYj6Ioh4mbsQFBYUlpusl7m0%2BOHGzSzCdUiMCruOTl2O8rlUKmxBxjHdxixHPgfGYvtUhxuKwKXVpLR0b4DilebuutQI6XQAs%2BNj7DznUHxtl%2BiscKCeV8nU%2BqaMYp0bH5jzDTDSNN93kslJZA%2FCnEKtPTf43x0dTL7S9lMTa4kMXwNqPRtQGfWwAIwmvDbgwl2ijRVum078iPhzHP9N1rkilEui2y0P6pvlUDEJlta%7Ctkp%3ABFBM3Pf33e9k",
    },
    socialLinks: {
      telegram: "https://t.me/yourgroup",
      facebook: "https://facebook.com/groups/yourgroup",
    },
  },
  {
    id: 3,
    title: "Apple AirPods Pro",
    price: 249.99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80",
    ],
    category: "Electronics",
    description:
      "Active Noise Cancellation for immersive sound. Transparency mode for hearing what's happening around you.",
    discount: 15,
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Adaptive EQ",
      "Spatial audio",
      "Water resistant",
    ],
    specs: {
      "Battery Life": "4.5 hours",
      "Charging Case": "24 hours total",
      Connectivity: "H1 chip",
      "Water Resistance": "IPX4",
      Weight: "5.4g each",
    },
    reviews: [
      {
        id: "3",
        rating: 5,
        comment: "Perfect integration with iPhone",
        author: "Mike R.",
        date: "2024-02-14",
        verified: true,
      },
    ],
    affiliateLinks: {
      amazon:
        "https://www.amazon.com/Apple-AirPods-Pro-Generation-Wireless/dp/B0DHWTDQD4/ref=sr_1_2?crid=1JTBGF8YWMRVY&dib=eyJ2IjoiMSJ9.kqdLt_HcIyfgDEd8_3pLcMrkWbuNtlBA7F1WEirAE4IssVQ3SAp-c-HCxFQGRB2g504NFEsqsaaOvhGRF7T_c-xdrqstDWY8kG11KUHCv6fJP4QlvCX2GsiBfeUTQtv3dGTRV4VE3isW41lS7DhoMmhqM8__UqrzaSaBspPjGah8u-q442wzwoC5VzGKjS0TqWgXT5AhbtzeNlhNXFABtOJxqK3Qw1HbOp20rCjXGOY.vu1HZfs9x18Prv-hPzIEhrIGRUiGS51nsd30ArbCS4k&dib_tag=se&keywords=airpods&qid=1732983296&sprefix=airpod%2Caps%2C260&sr=8-2&th=1",
      ebay: "https://www.ebay.fr/itm/186645736593?_skw=airpods&itmmeta=01JDYXXZFAY2MQF09G6PDSXSSH&hash=item2b74f3ec91:g:PkYAAOSwuFFmxhgp&itmprp=enc%3AAQAJAAAA4HoV3kP08IDx%2BKZ9MfhVJKkAJrci5p9GqkiZpmZRd%2Fs4tPlj2fByYCPUQF24pBscvTYj6Ioh4mbsQFBYUlpusl7m0%2BOHGzSzCdUiMCruOTl2O8rlUKmxBxjHdxixHPgfGYvtUhxuKwKXVpLR0b4DilebuutQI6XQAs%2BNj7DznUHxtl%2BiscKCeV8nU%2BqaMYp0bH5jzDTDSNN93kslJZA%2FCnEKtPTf43x0dTL7S9lMTa4kMXwNqPRtQGfWwAIwmvDbgwl2ijRVum078iPhzHP9N1rkilEui2y0P6pvlUDEJlta%7Ctkp%3ABFBM3Pf33e9k",
    },
    socialLinks: {
      telegram: "https://t.me/yourgroup",
      facebook: "https://facebook.com/groups/yourgroup",
    },
  },
];
