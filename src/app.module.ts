import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
 

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,

      useFactory: async () => {
        return {
          playground: true,
          typePaths: ['./**/*.graphql'],
          definitions: {
            path: join(process.cwd(), 'src/graphql.ts'),
            emitTypenameField: true,
          },
          context: ({ req, connection }) => {
            const socket = connection?.context?.socket;

            return {
              req,
              socket,
            };
          },
          subscriptions: {
            'subscriptions-transport-ws': {
              path: '/graphql',
              onConnect: async (connectionParams: any, socket, context) => {
                return {
                  connectionParams,
                  socket,
                  context,
                };
              },
              onDisconnect: (socket) => socket,
            },
          },
          cors: {
            credentials: true,
            origin: true,
          },
        };
      },
    }),
  ],
  controllers: [],
  providers: [AppService, AppResolver, PrismaService],
})
export class AppModule {}
