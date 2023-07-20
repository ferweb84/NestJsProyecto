import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ProductsDocument = HydratedDocument<Product>;
@Schema()
export class Product {
  @Prop({ required: true })
  title: string;
  @Prop()
  description: string;
  @Prop({ required: true})
  category: string;
  @Prop({ required: true })
  stock: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
