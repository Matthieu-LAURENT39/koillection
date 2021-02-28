<?php

declare(strict_types=1);

namespace App\EventListener;

use Doctrine\ORM\Event\LifecycleEventArgs;

final class TimestampableListener
{
    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();
        if (true === property_exists($entity, 'createdAt')) {
            $entity->setCreatedAt(new \DateTime());
        }

        if (true === property_exists($entity, 'loggedAt') && $entity->getLoggedAt() === null) {
            $entity->setLoggedAt(new \DateTime());
        }
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $entity = $args->getEntity();
        if (true === property_exists($entity, 'updatedAt')) {
            $entity->setUpdatedAt(new \DateTime());
        }
    }
}
