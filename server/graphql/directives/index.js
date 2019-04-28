/* eslint class-methods-use-this: ["error", { "exceptMethods": ["visitFieldDefinition"] }] */
import moment from 'moment';
import { SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver, GraphQLString } from 'graphql';

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

// Create (or import) a custom schema directive
export default class CapitalizeDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const value = field;
    value.resolve = async (...args) => {
      const result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        return capitalizeFirstLetter(result);
      }
      return result;
    };
  }
}

export class FormattableDateDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { defaultFormat } = this.args;

    field.args.push({
      name: 'format',
      type: GraphQLString,
    });

    const value = field;

    value.resolve = async (
      source,
      { format, ...otherArgs },
      context,
      info,
    ) => {
      const date = await resolve.call(this, source, otherArgs, context, info);
      // If a format argument was not provided, default to the optional
      // defaultFormat argument taken by the @date directive:
      //   return formatDate(date, format || defaultFormat);
      return moment(date).format(format || defaultFormat);
    };

    value.type = GraphQLString;
  }
}
