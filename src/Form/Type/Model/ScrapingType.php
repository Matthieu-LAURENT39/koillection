<?php

declare(strict_types=1);

namespace App\Form\Type\Model;

use App\Entity\Path;
use App\Entity\Scraper;
use App\Model\Scraping;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ScrapingType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $entity = $builder->getData()->getEntity();

        $builder
            ->add('url', UrlType::class, [
                'required' => false,
            ])
            ->add('file', FileType::class, [
                'required' => false,
                'label' => false,
            ])
            ->add('entity', HiddenType::class, [
                'required' => true,
            ])
            ->add('scraper', EntityType::class, [
                'class' => Scraper::class,
                'choice_label' => 'name',
                'expanded' => false,
                'multiple' => false,
                'choice_name' => null,
                'required' => true,
            ])
            ->add('scrapName', CheckboxType::class, [
                'required' => false,
            ])
        ;

        if ($entity === 'item') {
            $builder->add('scrapImage', CheckboxType::class, [
                'required' => false,
            ]);
        }

        $formModifier = function (FormInterface $form, Scraper $scraper = null): void {
            $form->add('dataToScrap', EntityType::class, [
                'class' => Path::class,
                'choice_label' => 'name',
                'choices' => $scraper?->getDataPaths() ?: [],
                'expanded' => true,
                'multiple' => true,
                'required' => false,
                'empty_data' => '',
            ]);
        };

        $builder->addEventListener(
            FormEvents::PRE_SUBMIT,
            function (FormEvent $event) use ($formModifier): void {
                $dataToScrap = isset($event->getData()['dataToScrap']) && $event->getData()['dataToScrap'] !== [] ? $event->getData()['dataToScrap'] : [];
                if($dataToScrap !== []) {
                    $data = $event->getData();
                    $formModifier($event->getForm(), $data->getScraper());
                }
            }
        );
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Scraping::class,
            'choices' => []
        ]);
    }
}
