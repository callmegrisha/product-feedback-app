import { Link as RouterLink } from 'react-router-dom';
import {
  Flex,
  Text,
  Button,
  Icon,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link
} from '@chakra-ui/react';
import { IoIosArrowUp } from 'react-icons/io';

import { ColoredDotPhrase } from '../../UI/ColoredDotPhrase';
import { BaseTag } from '../../UI/BaseTag';
import { CommentsLength } from '../../UI/CommentsLength/CommentsLength';
import {
  card,
  cardBottom,
  cardDescription,
  cardTitle
} from './styles';

export const RoadmapCard = (props) => {

  const pickBorderTopColor = (status) => {
    if (status === 'planned') return 'custom.tacao';
    if (status === 'in-progress') return 'custom.cornflowerBlue';
    if (status === 'live') return 'custom.malibu';
  };

  return (
    <Card {...card} borderTopColor={pickBorderTopColor(props.status)}>
      <CardHeader p='0' mb={2} >
        <ColoredDotPhrase color={pickBorderTopColor(props.status)} text={props.status[0].toUpperCase() + props.status.substring(1)}/>
      </CardHeader>
      <CardBody p={0} mb={4}>
        <Link
          to={`/suggestion/${props.id}`}
          as={RouterLink}
          {...cardTitle}
          display='block'
          mb={1}
        >
          {props.title}
        </Link>
        <Text {...cardDescription}>{props.description}</Text>
        <BaseTag text={props.category[0].toUpperCase() + props.category.substring(1)} />
      </CardBody>
      <CardFooter p='0'>
        <Flex {...cardBottom}>
          <Button type='button' variant='up'>
            <Flex align='center' gap='2px' >
              <Icon as={IoIosArrowUp} mb='0 !important'/>
              <Text as='span'>{props.upvotes}</Text>
            </Flex>
          </Button>
          <CommentsLength comments={props.comments} />
        </Flex>
      </CardFooter>
    </Card>
  )
}
