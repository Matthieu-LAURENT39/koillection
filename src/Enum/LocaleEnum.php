<?php

declare(strict_types=1);

namespace App\Enum;

class LocaleEnum
{
    public const LOCALE_GB = 'gb';
    public const LOCALE_FR = 'fr';

    public const LOCALES = [
        self::LOCALE_GB,
        self::LOCALE_FR
    ];

    public const FULL_LOCALES = [
        self::LOCALE_GB => 'en_GB',
        self::LOCALE_FR => 'fr_FR'
    ];

    public const LOCALES_TRANS_KEYS = [
        self::LOCALE_GB => 'en_GB',
        self::LOCALE_FR => 'fr_FR'
    ];

    /**
     * @return array
     */
    public static function getLocaleLabels() : array
    {
        return [
            self::LOCALE_GB => 'global.locale.en_GB',
            self::LOCALE_FR => 'global.locale.fr_FR',
        ];
    }

    /**
     * @return array
     */
    public static function getFullLocales() : array
    {
        return self::FULL_LOCALES;
    }
}
