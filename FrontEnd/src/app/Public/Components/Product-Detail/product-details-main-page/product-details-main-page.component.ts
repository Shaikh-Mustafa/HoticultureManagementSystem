import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductDetails } from 'src/app/Public/Models/ProductDetails';

@Component({
  selector: 'app-product-details-main-page',
  templateUrl: './product-details-main-page.component.html',
  styleUrls: ['./product-details-main-page.component.css']
})
export class ProductDetailsMainPageComponent implements OnInit {
  productName: string = '';
  productPrice: string = '';
  productDiscription: string = '';
  status: string = '';
  payment: string = '';
  productImage: string = '';
  inStock!: boolean;
  Images: string[] = [];
  productDetails: ProductDetails[] = [];
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.productName = params['productName'];
      this.filterProduct();
    });
    console.log(this.productName);

    this.productDetails = [
      {
        productName: "Crassula marginalis rubra 'Calico Kitten'",
        productPrice: '6.00',
        productImage:
          '../../../../assets/Images/crassula-calico-kitten_720x.png',
        status: 'In stock, ready to ship',
        paymentInfo:
          'Pay in 4 interest-free installments for orders over $50.00 with ',
        description: `A hybrid succulent variety named for the famed British botanical artist and author, ‘Vera Higgins’ sports fleshy leaves in shades of red, coral, or even bronze, which whorl around the stem before culminating in rosettes at the tip. The color of the 1- inch long leaves will deepen in stronger sunlight or cooler (but not freezing!) temperatures, and begin reverting to a silvery green in darker conditions. Growing to about 8-10 inches tall, the stems will begin to drape over the edges of the pot, making for a particularly eye-catching arrangement.----To maintain the distinctive color of ‘Vera Higgins,’ ensure that your plant receives bright light with adequate airflow. Well-draining soil mix is a must to avoid rot, and plants should be watered when the soil feels dry to the touch or when the leaves begin to show signs of wrinkling.`,
        inStock: true,
      },
      {
        productName: "Echeveria 'Lola''",
        productPrice: '6.00',
        productImage: "../../../../assets/Images/Echeveria 'Lola'.png",
        status: 'Out of stock, will be available soon',
        paymentInfo:
          'Pay in 4 interest-free installments for orders over $50.00 with ',
        description:
          'A hybrid succulent variety named for the famed British botanical artist and author, ‘Vera Higgins’ sports fleshy leaves in shades of red, coral, or even bronze, which whorl around the stem before culminating in rosettes at the tip. The color of the 1- inch long leaves will deepen in stronger sunlight or cooler (but not freezing!) temperatures, and begin reverting to a silvery green in darker conditions. Growing to about 8-10 inches tall, the stems will begin to drape over the edges of the pot, making for a particularly eye-catching arrangement.----To maintain the distinctive color of ‘Vera Higgins,’ ensure that your plant receives bright light with adequate airflow. Well-draining soil mix is a must to avoid rot, and plants should be watered when the soil feels dry to the touch or when the leaves begin to show signs of wrinkling.',
        inStock: false,
      },
      {
        productName: "Senecio rowleyanus 'String of Pearls'",
        productPrice: '6.00',
        productImage:
          "../../../../assets/Images/Senecio rowleyanus 'String of Pearls'.png",
        status: 'In stock, ready to ship',
        paymentInfo:
          'Pay in 4 interest-free installments for orders over $50.00 with ',
        description:
          'A hybrid succulent variety named for the famed British botanical artist and author, ‘Vera Higgins’ sports fleshy leaves in shades of red, coral, or even bronze, which whorl around the stem before culminating in rosettes at the tip. The color of the 1- inch long leaves will deepen in stronger sunlight or cooler (but not freezing!) temperatures, and begin reverting to a silvery green in darker conditions. Growing to about 8-10 inches tall, the stems will begin to drape over the edges of the pot, making for a particularly eye-catching arrangement.----To maintain the distinctive color of ‘Vera Higgins,’ ensure that your plant receives bright light with adequate airflow. Well-draining soil mix is a must to avoid rot, and plants should be watered when the soil feels dry to the touch or when the leaves begin to show signs of wrinkling.',
        inStock: true,
      },
    ];
    this.filterProduct();
    this.Images = [
      '../../../../assets/Images/crassula-calico-kitten_720x.png',
      "../../../../assets/Images/Echeveria 'Lola'.png",
      "../../../../assets/Images/Senecio rowleyanus 'String of Pearls'.png",
      '../../../../assets/Images/Detail-page.webp',
    ];
  }
  filterProduct() {
    this.productDetails.forEach((element: any) => {
      console.log(element);
      if (element.productName == this.productName) {
        this.productName = element.productName;
        this.productPrice = element.productPrice;
        this.productDiscription = element.description;
        this.payment = element.paymentInfo;
        this.status = element.status;
        this.productImage = element.productImage;
        this.inStock = element.inStock;
      }
    });
  }
  ScrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  }


